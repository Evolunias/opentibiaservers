import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-download');
}

export default function Tibia11DownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-download" />;
}
