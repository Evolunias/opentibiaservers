import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-yurots-guide');
}

export default function PopularYurotsGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-yurots-guide" />;
}
