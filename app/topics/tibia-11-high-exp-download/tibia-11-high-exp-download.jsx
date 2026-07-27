import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-high-exp-download');
}

export default function Tibia11HighExpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-high-exp-download" />;
}
