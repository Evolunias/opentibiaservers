import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-download');
}

export default function Tibia100DownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-download" />;
}
