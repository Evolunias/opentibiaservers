import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-high-exp-download');
}

export default function Tibia100HighExpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-high-exp-download" />;
}
