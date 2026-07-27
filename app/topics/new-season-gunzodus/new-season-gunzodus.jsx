import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-gunzodus');
}

export default function NewSeasonGunzodusKeywordPage() {
  return <StaticKeywordPage slug="new-season-gunzodus" />;
}
