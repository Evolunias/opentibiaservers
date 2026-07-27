import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-yurots-guide');
}

export default function NewYurotsGuideKeywordPage() {
  return <StaticKeywordPage slug="new-yurots-guide" />;
}
