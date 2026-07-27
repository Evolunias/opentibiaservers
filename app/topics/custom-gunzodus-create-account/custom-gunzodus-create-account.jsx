import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-gunzodus-create-account');
}

export default function CustomGunzodusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-gunzodus-create-account" />;
}
