import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-market');
}

export default function GunzodusMarketKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-market" />;
}
