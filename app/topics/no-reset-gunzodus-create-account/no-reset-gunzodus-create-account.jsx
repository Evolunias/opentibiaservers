import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-gunzodus-create-account');
}

export default function NoResetGunzodusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-gunzodus-create-account" />;
}
