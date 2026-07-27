import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nto-star-private-server');
}

export default function HighrateNtoStarPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-nto-star-private-server" />;
}
