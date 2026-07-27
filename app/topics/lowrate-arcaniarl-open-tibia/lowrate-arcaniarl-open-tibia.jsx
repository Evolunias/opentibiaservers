import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-arcaniarl-open-tibia');
}

export default function LowrateArcaniarlOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-arcaniarl-open-tibia" />;
}
