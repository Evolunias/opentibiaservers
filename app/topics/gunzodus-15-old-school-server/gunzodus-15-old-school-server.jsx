import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-15-old-school-server');
}

export default function Gunzodus15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-15-old-school-server" />;
}
