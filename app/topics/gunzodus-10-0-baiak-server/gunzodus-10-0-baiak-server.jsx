import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-10-0-baiak-server');
}

export default function Gunzodus100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-10-0-baiak-server" />;
}
