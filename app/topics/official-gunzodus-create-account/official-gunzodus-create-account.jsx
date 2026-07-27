import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-gunzodus-create-account');
}

export default function OfficialGunzodusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-gunzodus-create-account" />;
}
