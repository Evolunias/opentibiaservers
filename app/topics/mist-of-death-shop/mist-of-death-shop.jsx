import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-shop');
}

export default function MistOfDeathShopKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-shop" />;
}
