import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ranger-s-arcani-open-tibia');
}

export default function HighrateRangerSArcaniOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-ranger-s-arcani-open-tibia" />;
}
