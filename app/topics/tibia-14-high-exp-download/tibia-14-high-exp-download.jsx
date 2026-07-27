import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-high-exp-download');
}

export default function Tibia14HighExpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-high-exp-download" />;
}
