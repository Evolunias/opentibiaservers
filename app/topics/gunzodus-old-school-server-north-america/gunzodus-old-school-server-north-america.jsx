import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-old-school-server-north-america');
}

export default function GunzodusOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-old-school-server-north-america" />;
}
