import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-fresh-start-download');
}

export default function Tibia15FreshStartDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-fresh-start-download" />;
}
