import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-gunzodus-rules');
}

export default function OfficialGunzodusRulesKeywordPage() {
  return <StaticKeywordPage slug="official-gunzodus-rules" />;
}
