import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-12-old-school-server');
}

export default function Gunzodus12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-12-old-school-server" />;
}
