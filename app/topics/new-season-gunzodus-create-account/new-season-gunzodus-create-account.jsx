import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-gunzodus-create-account');
}

export default function NewSeasonGunzodusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-gunzodus-create-account" />;
}
