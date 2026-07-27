import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-evo-download');
}

export default function Tibia100EvoDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-evo-download" />;
}
