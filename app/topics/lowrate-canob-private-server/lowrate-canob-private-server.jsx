import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-canob-private-server');
}

export default function LowrateCanobPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-canob-private-server" />;
}
