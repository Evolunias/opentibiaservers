import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realesta-client');
}

export default function HighrateRealestaClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-realesta-client" />;
}
