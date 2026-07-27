import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-download');
}

export default function Tibia84DownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-download" />;
}
