import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-12-baiak-server');
}

export default function Gunzodus12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-12-baiak-server" />;
}
