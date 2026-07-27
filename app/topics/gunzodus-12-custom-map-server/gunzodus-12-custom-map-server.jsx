import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-12-custom-map-server');
}

export default function Gunzodus12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-12-custom-map-server" />;
}
