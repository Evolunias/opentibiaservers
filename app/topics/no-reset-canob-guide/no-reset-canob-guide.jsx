import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-canob-guide');
}

export default function NoResetCanobGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-canob-guide" />;
}
