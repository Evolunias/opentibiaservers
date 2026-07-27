import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-54-custom-map-server');
}

export default function Gunzodus854CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-54-custom-map-server" />;
}
