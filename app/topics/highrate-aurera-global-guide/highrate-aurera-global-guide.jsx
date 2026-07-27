import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-aurera-global-guide');
}

export default function HighrateAureraGlobalGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-aurera-global-guide" />;
}
