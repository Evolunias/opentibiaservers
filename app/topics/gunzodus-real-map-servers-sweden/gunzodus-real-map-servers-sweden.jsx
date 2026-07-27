import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-real-map-servers-sweden');
}

export default function GunzodusRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-real-map-servers-sweden" />;
}
