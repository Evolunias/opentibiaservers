import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-1-old-school-server');
}

export default function Gunzodus81OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-1-old-school-server" />;
}
