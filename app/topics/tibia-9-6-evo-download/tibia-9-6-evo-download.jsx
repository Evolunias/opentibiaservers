import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-evo-download');
}

export default function Tibia96EvoDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-evo-download" />;
}
