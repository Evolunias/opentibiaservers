import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-baiak-server-europe');
}

export default function GunzodusBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-baiak-server-europe" />;
}
