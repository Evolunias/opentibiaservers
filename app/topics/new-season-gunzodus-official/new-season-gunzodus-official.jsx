import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-gunzodus-official');
}

export default function NewSeasonGunzodusOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-gunzodus-official" />;
}
