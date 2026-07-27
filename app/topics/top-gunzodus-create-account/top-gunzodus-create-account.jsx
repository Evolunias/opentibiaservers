import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-gunzodus-create-account');
}

export default function TopGunzodusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-gunzodus-create-account" />;
}
