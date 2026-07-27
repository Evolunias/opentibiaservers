import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-yurots-guide');
}

export default function CustomYurotsGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-yurots-guide" />;
}
