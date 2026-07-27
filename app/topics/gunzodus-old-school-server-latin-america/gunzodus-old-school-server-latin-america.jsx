import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-old-school-server-latin-america');
}

export default function GunzodusOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-old-school-server-latin-america" />;
}
