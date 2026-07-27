import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-gunzodus-ot-server');
}

export default function ActiveGunzodusOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-gunzodus-ot-server" />;
}
