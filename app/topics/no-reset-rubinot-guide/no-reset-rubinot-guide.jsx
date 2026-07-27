import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rubinot-guide');
}

export default function NoResetRubinotGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rubinot-guide" />;
}
