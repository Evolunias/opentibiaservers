import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-arcaniarl-tibia');
}

export default function LowrateArcaniarlTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-arcaniarl-tibia" />;
}
