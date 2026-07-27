import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-kasteria-download');
}

export default function HighrateKasteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-kasteria-download" />;
}
