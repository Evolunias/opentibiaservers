import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-4-baiak-server');
}

export default function Gunzodus74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-4-baiak-server" />;
}
