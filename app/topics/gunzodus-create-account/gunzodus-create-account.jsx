import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-create-account');
}

export default function GunzodusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-create-account" />;
}
