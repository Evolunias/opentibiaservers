import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-archlight-download');
}

export default function NewArchlightDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-archlight-download" />;
}
