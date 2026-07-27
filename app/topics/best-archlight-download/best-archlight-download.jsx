import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-archlight-download');
}

export default function BestArchlightDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-archlight-download" />;
}
