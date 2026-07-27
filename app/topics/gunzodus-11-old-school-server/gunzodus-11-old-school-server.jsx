import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-11-old-school-server');
}

export default function Gunzodus11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-11-old-school-server" />;
}
