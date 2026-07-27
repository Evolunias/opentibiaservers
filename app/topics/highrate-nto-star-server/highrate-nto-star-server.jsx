import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nto-star-server');
}

export default function HighrateNtoStarServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-nto-star-server" />;
}
