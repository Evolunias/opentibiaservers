import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-72-custom-map-server');
}

export default function Gunzodus772CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-72-custom-map-server" />;
}
