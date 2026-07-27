import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-high-exp-download');
}

export default function Tibia1098HighExpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-high-exp-download" />;
}
