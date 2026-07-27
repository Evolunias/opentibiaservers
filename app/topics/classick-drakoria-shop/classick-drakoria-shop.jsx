import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-shop');
}

export default function ClassickDrakoriaShopKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-shop" />;
}
