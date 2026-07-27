import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-cyntara-private-server');
}

export default function LowrateCyntaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-cyntara-private-server" />;
}
