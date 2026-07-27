import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-gunzodus-ot-server');
}

export default function OfficialGunzodusOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-gunzodus-ot-server" />;
}
