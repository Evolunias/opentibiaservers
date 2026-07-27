import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-alastera-guide');
}

export default function HighrateAlasteraGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-alastera-guide" />;
}
