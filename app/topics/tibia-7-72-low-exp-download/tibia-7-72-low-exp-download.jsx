import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-low-exp-download');
}

export default function Tibia772LowExpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-low-exp-download" />;
}
