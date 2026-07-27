import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-gunzodus-rules');
}

export default function CurrentGunzodusRulesKeywordPage() {
  return <StaticKeywordPage slug="current-gunzodus-rules" />;
}
