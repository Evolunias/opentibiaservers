import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-9-6-baiak-server');
}

export default function Gunzodus96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-9-6-baiak-server" />;
}
