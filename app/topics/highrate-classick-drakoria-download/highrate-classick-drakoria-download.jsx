import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classick-drakoria-download');
}

export default function HighrateClassickDrakoriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-classick-drakoria-download" />;
}
