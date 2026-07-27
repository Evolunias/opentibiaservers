import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-arcaniarl-guide');
}

export default function PopularArcaniarlGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-arcaniarl-guide" />;
}
