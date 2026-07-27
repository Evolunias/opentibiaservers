import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-fresh-start-download');
}

export default function Tibia81FreshStartDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-fresh-start-download" />;
}
