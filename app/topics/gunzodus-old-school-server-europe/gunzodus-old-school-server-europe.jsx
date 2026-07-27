import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-old-school-server-europe');
}

export default function GunzodusOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-old-school-server-europe" />;
}
