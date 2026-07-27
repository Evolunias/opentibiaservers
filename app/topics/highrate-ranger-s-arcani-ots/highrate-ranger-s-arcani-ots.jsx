import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ranger-s-arcani-ots');
}

export default function HighrateRangerSArcaniOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-ranger-s-arcani-ots" />;
}
