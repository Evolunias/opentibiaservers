import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oldera-private-server');
}

export default function HighrateOlderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-oldera-private-server" />;
}
