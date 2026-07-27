import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-gunzodus-rules');
}

export default function NewGunzodusRulesKeywordPage() {
  return <StaticKeywordPage slug="new-gunzodus-rules" />;
}
