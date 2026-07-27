import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-custom-map-server-sweden');
}

export default function GunzodusCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-custom-map-server-sweden" />;
}
