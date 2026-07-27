import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realesta-guide');
}

export default function BestRealestaGuideKeywordPage() {
  return <StaticKeywordPage slug="best-realesta-guide" />;
}
