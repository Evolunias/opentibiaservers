import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realera-private-server');
}

export default function HighrateRealeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-realera-private-server" />;
}
