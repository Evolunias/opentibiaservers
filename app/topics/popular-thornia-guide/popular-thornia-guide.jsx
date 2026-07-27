import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thornia-guide');
}

export default function PopularThorniaGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-thornia-guide" />;
}
