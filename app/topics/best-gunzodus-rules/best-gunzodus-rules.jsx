import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-gunzodus-rules');
}

export default function BestGunzodusRulesKeywordPage() {
  return <StaticKeywordPage slug="best-gunzodus-rules" />;
}
