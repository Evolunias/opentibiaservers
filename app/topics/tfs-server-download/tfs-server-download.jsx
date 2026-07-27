import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tfs-server-download');
}

export default function TfsServerDownloadKeywordPage() {
  return <StaticKeywordPage slug="tfs-server-download" />;
}
