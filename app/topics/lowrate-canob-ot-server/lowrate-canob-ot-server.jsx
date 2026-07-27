import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-canob-ot-server');
}

export default function LowrateCanobOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-canob-ot-server" />;
}
