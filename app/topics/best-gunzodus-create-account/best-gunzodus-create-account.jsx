import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-gunzodus-create-account');
}

export default function BestGunzodusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-gunzodus-create-account" />;
}
