import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nilot-private-server');
}

export default function HighrateNilotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-nilot-private-server" />;
}
