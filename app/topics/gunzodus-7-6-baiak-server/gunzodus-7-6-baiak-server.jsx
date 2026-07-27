import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-6-baiak-server');
}

export default function Gunzodus76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-6-baiak-server" />;
}
