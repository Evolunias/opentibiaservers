import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-archlight-download');
}

export default function FreshStartArchlightDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-archlight-download" />;
}
