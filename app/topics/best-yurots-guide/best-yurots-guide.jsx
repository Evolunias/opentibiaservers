import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-yurots-guide');
}

export default function BestYurotsGuideKeywordPage() {
  return <StaticKeywordPage slug="best-yurots-guide" />;
}
