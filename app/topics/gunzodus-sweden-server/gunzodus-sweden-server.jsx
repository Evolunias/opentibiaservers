import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-sweden-server');
}

export default function GunzodusSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-sweden-server" />;
}
