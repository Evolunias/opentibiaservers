import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-arcaniarl-open-tibia');
}

export default function BestArcaniarlOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-arcaniarl-open-tibia" />;
}
