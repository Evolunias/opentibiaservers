import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thaisot-client');
}

export default function HighrateThaisotClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-thaisot-client" />;
}
