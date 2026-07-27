import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thornia-private-server');
}

export default function HighrateThorniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-thornia-private-server" />;
}
