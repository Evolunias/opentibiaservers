import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-high-exp-download');
}

export default function Tibia854HighExpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-high-exp-download" />;
}
