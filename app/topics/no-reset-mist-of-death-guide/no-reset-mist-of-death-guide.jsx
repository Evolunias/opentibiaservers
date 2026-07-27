import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-mist-of-death-guide');
}

export default function NoResetMistOfDeathGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-mist-of-death-guide" />;
}
