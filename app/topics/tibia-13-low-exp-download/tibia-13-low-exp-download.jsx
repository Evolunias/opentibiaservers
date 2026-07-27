import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-low-exp-download');
}

export default function Tibia13LowExpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-low-exp-download" />;
}
