import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-gunzodus-login');
}

export default function OldSchoolGunzodusLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-gunzodus-login" />;
}
