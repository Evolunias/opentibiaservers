import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-canob-ot-server');
}

export default function BestCanobOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-canob-ot-server" />;
}
