import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-gunzodus-rules');
}

export default function NoResetGunzodusRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-gunzodus-rules" />;
}
