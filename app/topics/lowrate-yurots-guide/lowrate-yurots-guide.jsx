import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-yurots-guide');
}

export default function LowrateYurotsGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-yurots-guide" />;
}
