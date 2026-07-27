import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nostalther-private-server');
}

export default function HighrateNostaltherPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-nostalther-private-server" />;
}
