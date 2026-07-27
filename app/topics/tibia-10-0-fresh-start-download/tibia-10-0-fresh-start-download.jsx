import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-fresh-start-download');
}

export default function Tibia100FreshStartDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-fresh-start-download" />;
}
