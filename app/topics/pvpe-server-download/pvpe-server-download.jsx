import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-download');
}

export default function PvpeServerDownloadKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-download" />;
}
