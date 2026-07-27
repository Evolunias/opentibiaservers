import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-gunzodus-server');
}

export default function NoResetGunzodusServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-gunzodus-server" />;
}
