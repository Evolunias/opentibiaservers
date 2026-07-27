import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-download');
}

export default function Tibia76DownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-download" />;
}
