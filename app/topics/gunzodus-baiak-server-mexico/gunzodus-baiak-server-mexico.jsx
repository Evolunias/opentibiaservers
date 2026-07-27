import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-baiak-server-mexico');
}

export default function GunzodusBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-baiak-server-mexico" />;
}
