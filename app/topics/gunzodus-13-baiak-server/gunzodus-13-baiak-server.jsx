import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-13-baiak-server');
}

export default function Gunzodus13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-13-baiak-server" />;
}
