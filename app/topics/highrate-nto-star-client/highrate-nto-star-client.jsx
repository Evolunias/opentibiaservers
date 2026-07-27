import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nto-star-client');
}

export default function HighrateNtoStarClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-nto-star-client" />;
}
