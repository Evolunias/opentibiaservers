import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-archlight-download');
}

export default function LowrateArchlightDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-archlight-download" />;
}
