import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-download');
}

export default function Tibia14DownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-download" />;
}
