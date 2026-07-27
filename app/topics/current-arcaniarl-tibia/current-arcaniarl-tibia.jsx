import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-arcaniarl-tibia');
}

export default function CurrentArcaniarlTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-arcaniarl-tibia" />;
}
