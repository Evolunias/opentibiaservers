import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-baiak-server-brazil');
}

export default function GunzodusBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-baiak-server-brazil" />;
}
