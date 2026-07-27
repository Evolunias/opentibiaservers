import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-cyntara-private-server');
}

export default function HighrateCyntaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-cyntara-private-server" />;
}
