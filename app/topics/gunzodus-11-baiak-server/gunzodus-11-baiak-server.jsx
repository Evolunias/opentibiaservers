import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-11-baiak-server');
}

export default function Gunzodus11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-11-baiak-server" />;
}
