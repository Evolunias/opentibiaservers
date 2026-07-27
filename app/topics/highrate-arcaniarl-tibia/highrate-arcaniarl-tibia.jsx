import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-arcaniarl-tibia');
}

export default function HighrateArcaniarlTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-arcaniarl-tibia" />;
}
