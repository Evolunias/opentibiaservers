import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-gunzodus-rules');
}

export default function OldSchoolGunzodusRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-gunzodus-rules" />;
}
