import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-low-exp-download');
}

export default function Tibia11LowExpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-low-exp-download" />;
}
