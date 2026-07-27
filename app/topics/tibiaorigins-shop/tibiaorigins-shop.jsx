import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-shop');
}

export default function TibiaoriginsShopKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-shop" />;
}
