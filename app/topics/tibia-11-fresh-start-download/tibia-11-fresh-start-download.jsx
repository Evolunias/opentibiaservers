import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-fresh-start-download');
}

export default function Tibia11FreshStartDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-fresh-start-download" />;
}
