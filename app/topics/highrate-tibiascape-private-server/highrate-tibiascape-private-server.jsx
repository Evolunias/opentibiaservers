import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiascape-private-server');
}

export default function HighrateTibiascapePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiascape-private-server" />;
}
