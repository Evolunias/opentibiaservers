import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-yurots-guide');
}

export default function ActiveYurotsGuideKeywordPage() {
  return <StaticKeywordPage slug="active-yurots-guide" />;
}
