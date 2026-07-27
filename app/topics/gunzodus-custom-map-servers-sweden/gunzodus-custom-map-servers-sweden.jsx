import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-custom-map-servers-sweden');
}

export default function GunzodusCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-custom-map-servers-sweden" />;
}
