import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-low-exp-download');
}

export default function Tibia1098LowExpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-low-exp-download" />;
}
