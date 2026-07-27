import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-cyntara-guide');
}

export default function NoResetCyntaraGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-cyntara-guide" />;
}
