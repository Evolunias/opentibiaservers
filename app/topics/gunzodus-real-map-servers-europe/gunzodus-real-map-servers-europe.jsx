import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-real-map-servers-europe');
}

export default function GunzodusRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-real-map-servers-europe" />;
}
