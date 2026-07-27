import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-map');
}

export default function GunzodusMapKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-map" />;
}
