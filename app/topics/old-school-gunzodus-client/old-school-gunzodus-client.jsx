import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-gunzodus-client');
}

export default function OldSchoolGunzodusClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-gunzodus-client" />;
}
