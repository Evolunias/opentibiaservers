import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-evo-download');
}

export default function Tibia772EvoDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-evo-download" />;
}
