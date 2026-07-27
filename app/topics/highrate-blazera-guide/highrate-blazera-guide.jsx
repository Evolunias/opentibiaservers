import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-blazera-guide');
}

export default function HighrateBlazeraGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-blazera-guide" />;
}
