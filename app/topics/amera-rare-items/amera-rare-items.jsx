import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('amera-rare-items');
}

export default function AmeraRareItemsKeywordPage() {
  return <StaticKeywordPage slug="amera-rare-items" />;
}
