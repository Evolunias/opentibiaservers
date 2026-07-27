import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-baiak-server-uk');
}

export default function GunzodusBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-baiak-server-uk" />;
}
