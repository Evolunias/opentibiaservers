import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-14-custom-map-server');
}

export default function Gunzodus14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-14-custom-map-server" />;
}
