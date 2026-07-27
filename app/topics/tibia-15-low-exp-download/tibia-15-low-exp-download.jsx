import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-low-exp-download');
}

export default function Tibia15LowExpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-low-exp-download" />;
}
