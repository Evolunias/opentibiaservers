import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-high-exp-download');
}

export default function Tibia80HighExpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-high-exp-download" />;
}
