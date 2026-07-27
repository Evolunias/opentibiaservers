import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-custom-map-servers-poland');
}

export default function GunzodusCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-custom-map-servers-poland" />;
}
