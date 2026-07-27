import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-archlight-download');
}

export default function OfficialArchlightDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-archlight-download" />;
}
