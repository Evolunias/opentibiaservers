import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-coxaot-guide');
}

export default function NoResetCoxaotGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-coxaot-guide" />;
}
