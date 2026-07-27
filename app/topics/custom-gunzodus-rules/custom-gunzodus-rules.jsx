import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-gunzodus-rules');
}

export default function CustomGunzodusRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-gunzodus-rules" />;
}
