import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-gunzodus-create-account');
}

export default function PopularGunzodusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-gunzodus-create-account" />;
}
