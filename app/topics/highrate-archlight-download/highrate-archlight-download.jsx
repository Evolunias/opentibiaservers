import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-archlight-download');
}

export default function HighrateArchlightDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-archlight-download" />;
}
