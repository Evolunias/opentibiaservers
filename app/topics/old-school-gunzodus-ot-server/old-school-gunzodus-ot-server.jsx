import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-gunzodus-ot-server');
}

export default function OldSchoolGunzodusOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-gunzodus-ot-server" />;
}
