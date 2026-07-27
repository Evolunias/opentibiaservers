import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-download');
}

export default function Tibia81DownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-download" />;
}
