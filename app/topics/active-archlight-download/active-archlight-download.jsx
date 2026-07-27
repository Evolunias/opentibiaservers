import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-archlight-download');
}

export default function ActiveArchlightDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-archlight-download" />;
}
