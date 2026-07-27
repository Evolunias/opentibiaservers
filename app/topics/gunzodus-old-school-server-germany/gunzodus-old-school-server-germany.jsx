import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-old-school-server-germany');
}

export default function GunzodusOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-old-school-server-germany" />;
}
