import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-baiak-server-argentina');
}

export default function GunzodusBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-baiak-server-argentina" />;
}
