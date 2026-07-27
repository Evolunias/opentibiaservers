import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-arcaniarl-guide');
}

export default function BestArcaniarlGuideKeywordPage() {
  return <StaticKeywordPage slug="best-arcaniarl-guide" />;
}
