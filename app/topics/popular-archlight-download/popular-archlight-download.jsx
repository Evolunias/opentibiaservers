import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-archlight-download');
}

export default function PopularArchlightDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-archlight-download" />;
}
