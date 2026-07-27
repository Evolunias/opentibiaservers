import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-old-school-server-france');
}

export default function GunzodusOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-old-school-server-france" />;
}
