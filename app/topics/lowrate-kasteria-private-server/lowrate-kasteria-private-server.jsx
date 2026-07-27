import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-kasteria-private-server');
}

export default function LowrateKasteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-kasteria-private-server" />;
}
