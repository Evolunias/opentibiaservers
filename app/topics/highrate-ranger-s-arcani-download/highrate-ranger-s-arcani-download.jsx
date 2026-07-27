import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ranger-s-arcani-download');
}

export default function HighrateRangerSArcaniDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-ranger-s-arcani-download" />;
}
