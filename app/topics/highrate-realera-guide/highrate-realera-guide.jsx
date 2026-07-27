import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realera-guide');
}

export default function HighrateRealeraGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-realera-guide" />;
}
