import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('jamera-rare-items');
}

export default function JameraRareItemsKeywordPage() {
  return <StaticKeywordPage slug="jamera-rare-items" />;
}
