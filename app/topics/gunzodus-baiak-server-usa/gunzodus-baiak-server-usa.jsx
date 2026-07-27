import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-baiak-server-usa');
}

export default function GunzodusBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-baiak-server-usa" />;
}
