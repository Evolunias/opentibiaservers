import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-shop');
}

export default function EvoluniaShopKeywordPage() {
  return <StaticKeywordPage slug="evolunia-shop" />;
}
