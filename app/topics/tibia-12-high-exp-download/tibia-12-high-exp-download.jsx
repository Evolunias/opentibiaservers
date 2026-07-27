import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-high-exp-download');
}

export default function Tibia12HighExpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-high-exp-download" />;
}
