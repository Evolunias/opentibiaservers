import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-gunzodus-rules');
}

export default function LowrateGunzodusRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-gunzodus-rules" />;
}
