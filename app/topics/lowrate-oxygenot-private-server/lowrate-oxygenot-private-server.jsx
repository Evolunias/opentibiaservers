import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oxygenot-private-server');
}

export default function LowrateOxygenotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oxygenot-private-server" />;
}
