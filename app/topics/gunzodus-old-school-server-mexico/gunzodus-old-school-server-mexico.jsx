import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-old-school-server-mexico');
}

export default function GunzodusOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-old-school-server-mexico" />;
}
