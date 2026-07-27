import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-gunzodus-create-account');
}

export default function HighrateGunzodusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-gunzodus-create-account" />;
}
