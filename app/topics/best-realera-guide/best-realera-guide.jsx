import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realera-guide');
}

export default function BestRealeraGuideKeywordPage() {
  return <StaticKeywordPage slug="best-realera-guide" />;
}
