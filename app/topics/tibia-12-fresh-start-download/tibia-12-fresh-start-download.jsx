import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-fresh-start-download');
}

export default function Tibia12FreshStartDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-fresh-start-download" />;
}
