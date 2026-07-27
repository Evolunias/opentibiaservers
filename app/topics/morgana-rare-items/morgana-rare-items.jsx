import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('morgana-rare-items');
}

export default function MorganaRareItemsKeywordPage() {
  return <StaticKeywordPage slug="morgana-rare-items" />;
}
