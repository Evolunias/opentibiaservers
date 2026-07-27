import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shivera-rare-items');
}

export default function ShiveraRareItemsKeywordPage() {
  return <StaticKeywordPage slug="shivera-rare-items" />;
}
