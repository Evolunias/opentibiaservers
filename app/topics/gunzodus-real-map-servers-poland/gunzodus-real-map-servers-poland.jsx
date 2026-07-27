import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-real-map-servers-poland');
}

export default function GunzodusRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-real-map-servers-poland" />;
}
