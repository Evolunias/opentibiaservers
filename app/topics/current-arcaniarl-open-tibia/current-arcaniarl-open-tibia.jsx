import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-arcaniarl-open-tibia');
}

export default function CurrentArcaniarlOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-arcaniarl-open-tibia" />;
}
