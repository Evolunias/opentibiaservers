import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-arcaniarl-tibia');
}

export default function PopularArcaniarlTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-arcaniarl-tibia" />;
}
