import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-canob-server');
}

export default function LowrateCanobServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-canob-server" />;
}
