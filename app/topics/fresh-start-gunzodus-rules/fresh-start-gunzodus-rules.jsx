import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-gunzodus-rules');
}

export default function FreshStartGunzodusRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-gunzodus-rules" />;
}
