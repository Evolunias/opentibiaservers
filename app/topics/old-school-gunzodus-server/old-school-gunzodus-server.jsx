import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-gunzodus-server');
}

export default function OldSchoolGunzodusServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-gunzodus-server" />;
}
