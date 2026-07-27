import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-0-old-school-server');
}

export default function Gunzodus80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-0-old-school-server" />;
}
