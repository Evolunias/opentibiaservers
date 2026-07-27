import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-fresh-start-download');
}

export default function Tibia13FreshStartDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-fresh-start-download" />;
}
