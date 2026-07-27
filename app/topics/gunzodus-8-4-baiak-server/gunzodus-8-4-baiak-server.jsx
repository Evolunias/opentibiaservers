import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-4-baiak-server');
}

export default function Gunzodus84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-4-baiak-server" />;
}
