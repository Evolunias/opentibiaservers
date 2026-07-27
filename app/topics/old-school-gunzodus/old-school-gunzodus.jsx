import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-gunzodus');
}

export default function OldSchoolGunzodusKeywordPage() {
  return <StaticKeywordPage slug="old-school-gunzodus" />;
}
