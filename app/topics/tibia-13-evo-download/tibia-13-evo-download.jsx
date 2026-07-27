import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-evo-download');
}

export default function Tibia13EvoDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-evo-download" />;
}
