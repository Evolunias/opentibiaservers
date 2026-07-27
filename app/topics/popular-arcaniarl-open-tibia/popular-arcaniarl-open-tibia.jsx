import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-arcaniarl-open-tibia');
}

export default function PopularArcaniarlOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-arcaniarl-open-tibia" />;
}
