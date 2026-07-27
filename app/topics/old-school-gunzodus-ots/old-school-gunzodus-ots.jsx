import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-gunzodus-ots');
}

export default function OldSchoolGunzodusOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-gunzodus-ots" />;
}
