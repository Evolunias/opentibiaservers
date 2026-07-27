import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-real-map');
}

export default function GunzodusRealMapKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-real-map" />;
}
