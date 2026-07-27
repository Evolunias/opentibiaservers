import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-baiak-server-germany');
}

export default function GunzodusBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-baiak-server-germany" />;
}
