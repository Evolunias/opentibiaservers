import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-low-exp-download');
}

export default function Tibia74LowExpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-low-exp-download" />;
}
