import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-canob-private-server');
}

export default function HighrateCanobPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-canob-private-server" />;
}
