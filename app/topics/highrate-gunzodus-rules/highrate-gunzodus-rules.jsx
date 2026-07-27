import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-gunzodus-rules');
}

export default function HighrateGunzodusRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-gunzodus-rules" />;
}
