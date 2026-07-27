import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classicus-guide');
}

export default function NoResetClassicusGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classicus-guide" />;
}
