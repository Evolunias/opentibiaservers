import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-evo-download');
}

export default function Tibia76EvoDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-evo-download" />;
}
