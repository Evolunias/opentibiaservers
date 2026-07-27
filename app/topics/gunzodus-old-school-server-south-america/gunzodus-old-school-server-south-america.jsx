import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-old-school-server-south-america');
}

export default function GunzodusOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-old-school-server-south-america" />;
}
