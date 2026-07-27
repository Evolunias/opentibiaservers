import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-custom-map-server-poland');
}

export default function GunzodusCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-custom-map-server-poland" />;
}
