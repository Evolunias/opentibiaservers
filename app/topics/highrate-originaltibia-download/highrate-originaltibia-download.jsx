import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-originaltibia-download');
}

export default function HighrateOriginaltibiaDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-originaltibia-download" />;
}
