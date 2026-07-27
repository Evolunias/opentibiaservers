import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nilot-client');
}

export default function HighrateNilotClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-nilot-client" />;
}
