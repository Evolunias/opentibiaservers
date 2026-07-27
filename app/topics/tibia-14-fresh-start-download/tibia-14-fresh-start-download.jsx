import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-fresh-start-download');
}

export default function Tibia14FreshStartDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-fresh-start-download" />;
}
