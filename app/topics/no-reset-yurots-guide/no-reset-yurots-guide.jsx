import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-yurots-guide');
}

export default function NoResetYurotsGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-yurots-guide" />;
}
