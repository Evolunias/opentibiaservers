import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-gunzodus-create-account');
}

export default function LowrateGunzodusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-gunzodus-create-account" />;
}
