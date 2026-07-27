import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-shop');
}

export default function RuthlessChaosShopKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-shop" />;
}
