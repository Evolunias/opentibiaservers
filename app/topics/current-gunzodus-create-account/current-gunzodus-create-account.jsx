import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-gunzodus-create-account');
}

export default function CurrentGunzodusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-gunzodus-create-account" />;
}
