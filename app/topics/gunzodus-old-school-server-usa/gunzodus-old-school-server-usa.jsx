import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-old-school-server-usa');
}

export default function GunzodusOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-old-school-server-usa" />;
}
