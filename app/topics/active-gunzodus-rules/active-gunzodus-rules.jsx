import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-gunzodus-rules');
}

export default function ActiveGunzodusRulesKeywordPage() {
  return <StaticKeywordPage slug="active-gunzodus-rules" />;
}
