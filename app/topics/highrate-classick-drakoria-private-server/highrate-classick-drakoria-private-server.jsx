import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classick-drakoria-private-server');
}

export default function HighrateClassickDrakoriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-classick-drakoria-private-server" />;
}
