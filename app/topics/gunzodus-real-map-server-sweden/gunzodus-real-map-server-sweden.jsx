import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-real-map-server-sweden');
}

export default function GunzodusRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-real-map-server-sweden" />;
}
