import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-custom-map-server-europe');
}

export default function GunzodusCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-custom-map-server-europe" />;
}
