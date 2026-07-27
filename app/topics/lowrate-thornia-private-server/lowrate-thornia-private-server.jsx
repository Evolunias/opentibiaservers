import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thornia-private-server');
}

export default function LowrateThorniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thornia-private-server" />;
}
