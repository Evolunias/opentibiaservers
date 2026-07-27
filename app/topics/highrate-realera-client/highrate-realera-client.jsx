import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realera-client');
}

export default function HighrateRealeraClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-realera-client" />;
}
