import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-evo-download');
}

export default function Tibia11EvoDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-evo-download" />;
}
