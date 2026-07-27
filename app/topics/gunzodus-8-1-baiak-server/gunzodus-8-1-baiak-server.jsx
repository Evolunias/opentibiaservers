import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-1-baiak-server');
}

export default function Gunzodus81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-1-baiak-server" />;
}
