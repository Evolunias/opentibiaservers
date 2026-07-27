import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-4-old-school-server');
}

export default function Gunzodus74OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-4-old-school-server" />;
}
