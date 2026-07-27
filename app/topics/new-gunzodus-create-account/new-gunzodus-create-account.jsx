import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-gunzodus-create-account');
}

export default function NewGunzodusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-gunzodus-create-account" />;
}
