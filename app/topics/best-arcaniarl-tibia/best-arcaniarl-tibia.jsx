import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-arcaniarl-tibia');
}

export default function BestArcaniarlTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-arcaniarl-tibia" />;
}
