import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-1-old-school-server');
}

export default function Gunzodus71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-1-old-school-server" />;
}
