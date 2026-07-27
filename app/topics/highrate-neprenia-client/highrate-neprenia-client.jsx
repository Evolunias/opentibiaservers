import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-neprenia-client');
}

export default function HighrateNepreniaClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-neprenia-client" />;
}
