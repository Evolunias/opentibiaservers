import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-shop');
}

export default function GunzodusShopKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-shop" />;
}
