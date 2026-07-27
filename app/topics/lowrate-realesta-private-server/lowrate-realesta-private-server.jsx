import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realesta-private-server');
}

export default function LowrateRealestaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realesta-private-server" />;
}
