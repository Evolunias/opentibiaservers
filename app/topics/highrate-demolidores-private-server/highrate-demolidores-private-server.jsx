import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-demolidores-private-server');
}

export default function HighrateDemolidoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-demolidores-private-server" />;
}
