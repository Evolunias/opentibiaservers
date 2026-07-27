import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-14-real-map-server');
}

export default function Gunzodus14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-14-real-map-server" />;
}
