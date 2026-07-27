import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-shop');
}

export default function SaintsotShopKeywordPage() {
  return <StaticKeywordPage slug="saintsot-shop" />;
}
