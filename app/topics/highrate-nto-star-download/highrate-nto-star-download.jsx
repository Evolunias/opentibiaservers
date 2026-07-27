import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nto-star-download');
}

export default function HighrateNtoStarDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-nto-star-download" />;
}
