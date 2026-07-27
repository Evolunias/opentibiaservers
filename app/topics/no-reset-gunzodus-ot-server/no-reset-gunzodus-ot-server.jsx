import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-gunzodus-ot-server');
}

export default function NoResetGunzodusOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-gunzodus-ot-server" />;
}
