import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-canob-ots');
}

export default function BestCanobOtsKeywordPage() {
  return <StaticKeywordPage slug="best-canob-ots" />;
}
