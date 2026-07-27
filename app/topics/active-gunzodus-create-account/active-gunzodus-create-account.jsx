import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-gunzodus-create-account');
}

export default function ActiveGunzodusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-gunzodus-create-account" />;
}
