import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-gunzodus-private-server');
}

export default function ActiveGunzodusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-gunzodus-private-server" />;
}
