import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-arcaniarl-open-tibia');
}

export default function HighrateArcaniarlOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-arcaniarl-open-tibia" />;
}
