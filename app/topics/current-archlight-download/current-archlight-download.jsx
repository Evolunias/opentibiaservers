import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-archlight-download');
}

export default function CurrentArchlightDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-archlight-download" />;
}
