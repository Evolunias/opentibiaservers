import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-baiak-server-poland');
}

export default function GunzodusBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-baiak-server-poland" />;
}
