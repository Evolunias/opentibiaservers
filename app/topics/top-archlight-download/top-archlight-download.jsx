import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-archlight-download');
}

export default function TopArchlightDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-archlight-download" />;
}
