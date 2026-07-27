import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thornia-guide');
}

export default function BestThorniaGuideKeywordPage() {
  return <StaticKeywordPage slug="best-thornia-guide" />;
}
