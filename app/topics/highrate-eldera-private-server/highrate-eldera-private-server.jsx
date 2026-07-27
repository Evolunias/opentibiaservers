import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eldera-private-server');
}

export default function HighrateElderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-eldera-private-server" />;
}
