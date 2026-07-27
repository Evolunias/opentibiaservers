import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-evo-download');
}

export default function Tibia14EvoDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-evo-download" />;
}
