import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realesta-guide');
}

export default function HighrateRealestaGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-realesta-guide" />;
}
