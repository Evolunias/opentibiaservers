import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-baiak-server-canada');
}

export default function GunzodusBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-baiak-server-canada" />;
}
