import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-13-old-school-server');
}

export default function Gunzodus13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-13-old-school-server" />;
}
