import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-gunzodus-ot');
}

export default function OldSchoolGunzodusOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-gunzodus-ot" />;
}
