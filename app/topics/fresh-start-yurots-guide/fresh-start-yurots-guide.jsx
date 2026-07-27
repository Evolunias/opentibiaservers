import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-yurots-guide');
}

export default function FreshStartYurotsGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-yurots-guide" />;
}
