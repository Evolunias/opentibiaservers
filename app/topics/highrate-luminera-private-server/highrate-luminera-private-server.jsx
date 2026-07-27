import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-luminera-private-server');
}

export default function HighrateLumineraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-luminera-private-server" />;
}
