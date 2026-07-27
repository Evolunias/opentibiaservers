import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-gunzodus-guide');
}

export default function OldSchoolGunzodusGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-gunzodus-guide" />;
}
