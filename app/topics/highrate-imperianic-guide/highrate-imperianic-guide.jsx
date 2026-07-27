import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-imperianic-guide');
}

export default function HighrateImperianicGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-imperianic-guide" />;
}
