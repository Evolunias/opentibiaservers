import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-high-exp-download');
}

export default function Tibia96HighExpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-high-exp-download" />;
}
