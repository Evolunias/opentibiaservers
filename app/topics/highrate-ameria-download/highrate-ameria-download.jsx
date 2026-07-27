import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ameria-download');
}

export default function HighrateAmeriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-ameria-download" />;
}
