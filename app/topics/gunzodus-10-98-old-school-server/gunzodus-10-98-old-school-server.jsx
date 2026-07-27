import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-10-98-old-school-server');
}

export default function Gunzodus1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-10-98-old-school-server" />;
}
