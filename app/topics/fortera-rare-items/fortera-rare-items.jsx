import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fortera-rare-items');
}

export default function ForteraRareItemsKeywordPage() {
  return <StaticKeywordPage slug="fortera-rare-items" />;
}
