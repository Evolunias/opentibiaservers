import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-old-school-server-uk');
}

export default function GunzodusOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-old-school-server-uk" />;
}
