import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-server-download');
}

export default function Tibia86ServerDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-server-download" />;
}
