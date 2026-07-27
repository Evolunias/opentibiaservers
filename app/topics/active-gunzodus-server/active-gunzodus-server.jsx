import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-gunzodus-server');
}

export default function ActiveGunzodusServerKeywordPage() {
  return <StaticKeywordPage slug="active-gunzodus-server" />;
}
