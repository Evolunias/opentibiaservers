import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-low-exp-download');
}

export default function Tibia71LowExpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-low-exp-download" />;
}
