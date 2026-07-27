import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-archlight-download');
}

export default function CustomArchlightDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-archlight-download" />;
}
