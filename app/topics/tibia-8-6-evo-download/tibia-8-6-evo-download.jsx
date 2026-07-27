import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-evo-download');
}

export default function Tibia86EvoDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-evo-download" />;
}
