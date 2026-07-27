import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nilot-guide');
}

export default function NoResetNilotGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nilot-guide" />;
}
