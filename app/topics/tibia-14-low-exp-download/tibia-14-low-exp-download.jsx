import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-low-exp-download');
}

export default function Tibia14LowExpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-low-exp-download" />;
}
