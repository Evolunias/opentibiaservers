import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-15-baiak-server');
}

export default function Gunzodus15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-15-baiak-server" />;
}
