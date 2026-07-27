import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-originaltibia-guide');
}

export default function HighrateOriginaltibiaGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-originaltibia-guide" />;
}
