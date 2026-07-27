import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-old-school-server-canada');
}

export default function GunzodusOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-old-school-server-canada" />;
}
