import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-gunzodus-official');
}

export default function OldSchoolGunzodusOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-gunzodus-official" />;
}
