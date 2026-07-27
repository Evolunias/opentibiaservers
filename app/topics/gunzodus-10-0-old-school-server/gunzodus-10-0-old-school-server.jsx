import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-10-0-old-school-server');
}

export default function Gunzodus100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-10-0-old-school-server" />;
}
