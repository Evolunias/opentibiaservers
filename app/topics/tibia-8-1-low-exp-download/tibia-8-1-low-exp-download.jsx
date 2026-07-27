import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-low-exp-download');
}

export default function Tibia81LowExpDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-low-exp-download" />;
}
