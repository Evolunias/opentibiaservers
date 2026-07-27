import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-gunzodus-server');
}

export default function BaiakGunzodusServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-gunzodus-server" />;
}
