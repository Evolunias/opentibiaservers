import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nova-rare-items');
}

export default function NovaRareItemsKeywordPage() {
  return <StaticKeywordPage slug="nova-rare-items" />;
}
