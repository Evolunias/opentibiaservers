import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-high-exp-download');
}

export default function Tibia13HighExpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-high-exp-download" />;
}
