import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-0-baiak-server');
}

export default function Gunzodus80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-0-baiak-server" />;
}
