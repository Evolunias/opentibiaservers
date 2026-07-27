import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-old-school-server-brazil');
}

export default function GunzodusOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-old-school-server-brazil" />;
}
