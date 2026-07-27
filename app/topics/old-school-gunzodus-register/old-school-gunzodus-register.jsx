import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-gunzodus-register');
}

export default function OldSchoolGunzodusRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-gunzodus-register" />;
}
