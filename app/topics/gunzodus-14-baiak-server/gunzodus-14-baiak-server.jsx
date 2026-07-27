import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-14-baiak-server');
}

export default function Gunzodus14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-14-baiak-server" />;
}
