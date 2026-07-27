import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-yurots-client');
}

export default function HighrateYurotsClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-yurots-client" />;
}
