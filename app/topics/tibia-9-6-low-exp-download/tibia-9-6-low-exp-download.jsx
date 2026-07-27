import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-low-exp-download');
}

export default function Tibia96LowExpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-low-exp-download" />;
}
