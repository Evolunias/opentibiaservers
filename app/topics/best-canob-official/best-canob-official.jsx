import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-canob-official');
}

export default function BestCanobOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-canob-official" />;
}
