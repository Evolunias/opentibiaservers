import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eternal-odyssey-client');
}

export default function HighrateEternalOdysseyClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-eternal-odyssey-client" />;
}
