import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ranger-s-arcani-tibia');
}

export default function HighrateRangerSArcaniTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-ranger-s-arcani-tibia" />;
}
