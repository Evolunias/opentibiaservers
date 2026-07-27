import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-gunzodus-client');
}

export default function NoResetGunzodusClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-gunzodus-client" />;
}
