import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-72-old-school-server');
}

export default function Gunzodus772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-72-old-school-server" />;
}
