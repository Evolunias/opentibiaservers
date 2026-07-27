import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-download');
}

export default function BaiakServerDownloadKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-download" />;
}
