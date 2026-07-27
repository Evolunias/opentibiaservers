import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('titania-rare-items');
}

export default function TitaniaRareItemsKeywordPage() {
  return <StaticKeywordPage slug="titania-rare-items" />;
}
