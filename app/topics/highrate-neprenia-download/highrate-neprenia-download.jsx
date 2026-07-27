import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-neprenia-download');
}

export default function HighrateNepreniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-neprenia-download" />;
}
