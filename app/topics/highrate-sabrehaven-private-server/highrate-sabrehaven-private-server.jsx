import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-sabrehaven-private-server');
}

export default function HighrateSabrehavenPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-sabrehaven-private-server" />;
}
