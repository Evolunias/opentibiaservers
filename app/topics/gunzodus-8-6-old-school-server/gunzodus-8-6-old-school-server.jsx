import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-6-old-school-server');
}

export default function Gunzodus86OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-6-old-school-server" />;
}
