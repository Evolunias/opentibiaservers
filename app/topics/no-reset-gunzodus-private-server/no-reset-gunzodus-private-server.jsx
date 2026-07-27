import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-gunzodus-private-server');
}

export default function NoResetGunzodusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-gunzodus-private-server" />;
}
