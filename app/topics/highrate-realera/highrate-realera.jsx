import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realera');
}

export default function HighrateRealeraKeywordPage() {
  return <StaticKeywordPage slug="highrate-realera" />;
}
