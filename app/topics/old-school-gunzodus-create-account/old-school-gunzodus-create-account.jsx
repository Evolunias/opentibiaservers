import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-gunzodus-create-account');
}

export default function OldSchoolGunzodusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-gunzodus-create-account" />;
}
