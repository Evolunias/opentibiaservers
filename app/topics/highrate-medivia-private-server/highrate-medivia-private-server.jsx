import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-medivia-private-server');
}

export default function HighrateMediviaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-medivia-private-server" />;
}
