import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realesta-private-server');
}

export default function HighrateRealestaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-realesta-private-server" />;
}
