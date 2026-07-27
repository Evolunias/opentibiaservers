import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('menera-rare-items');
}

export default function MeneraRareItemsKeywordPage() {
  return <StaticKeywordPage slug="menera-rare-items" />;
}
