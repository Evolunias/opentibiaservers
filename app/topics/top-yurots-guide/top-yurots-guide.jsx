import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-yurots-guide');
}

export default function TopYurotsGuideKeywordPage() {
  return <StaticKeywordPage slug="top-yurots-guide" />;
}
