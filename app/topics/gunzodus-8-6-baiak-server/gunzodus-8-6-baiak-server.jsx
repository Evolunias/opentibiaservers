import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-6-baiak-server');
}

export default function Gunzodus86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-6-baiak-server" />;
}
