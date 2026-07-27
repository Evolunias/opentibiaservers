import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-evo-download');
}

export default function Tibia84EvoDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-evo-download" />;
}
