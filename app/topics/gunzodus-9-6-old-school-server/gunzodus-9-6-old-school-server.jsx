import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-9-6-old-school-server');
}

export default function Gunzodus96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-9-6-old-school-server" />;
}
