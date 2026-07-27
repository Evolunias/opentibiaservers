import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oxygenot-private-server');
}

export default function TopOxygenotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-oxygenot-private-server" />;
}
