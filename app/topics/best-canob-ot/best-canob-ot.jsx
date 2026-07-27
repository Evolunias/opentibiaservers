import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-canob-ot');
}

export default function BestCanobOtKeywordPage() {
  return <StaticKeywordPage slug="best-canob-ot" />;
}
