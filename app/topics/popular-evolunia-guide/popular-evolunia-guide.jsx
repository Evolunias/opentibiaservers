import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolunia-guide');
}

export default function PopularEvoluniaGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-evolunia-guide" />;
}
