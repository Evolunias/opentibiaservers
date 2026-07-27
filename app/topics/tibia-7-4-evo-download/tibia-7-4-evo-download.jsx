import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-evo-download');
}

export default function Tibia74EvoDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-evo-download" />;
}
