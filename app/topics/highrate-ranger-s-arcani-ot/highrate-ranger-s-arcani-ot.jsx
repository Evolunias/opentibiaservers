import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ranger-s-arcani-ot');
}

export default function HighrateRangerSArcaniOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-ranger-s-arcani-ot" />;
}
