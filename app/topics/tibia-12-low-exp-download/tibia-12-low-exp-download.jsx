import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-low-exp-download');
}

export default function Tibia12LowExpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-low-exp-download" />;
}
