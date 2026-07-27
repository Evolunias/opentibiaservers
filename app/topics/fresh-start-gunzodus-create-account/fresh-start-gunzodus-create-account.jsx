import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-gunzodus-create-account');
}

export default function FreshStartGunzodusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-gunzodus-create-account" />;
}
