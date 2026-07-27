import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-old-school-server-poland');
}

export default function GunzodusOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-old-school-server-poland" />;
}
