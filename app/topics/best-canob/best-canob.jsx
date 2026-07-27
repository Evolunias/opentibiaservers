import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-canob');
}

export default function BestCanobKeywordPage() {
  return <StaticKeywordPage slug="best-canob" />;
}
