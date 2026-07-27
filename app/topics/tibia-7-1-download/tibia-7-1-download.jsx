import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-download');
}

export default function Tibia71DownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-download" />;
}
