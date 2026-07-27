import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-gunzodus-rules');
}

export default function PopularGunzodusRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-gunzodus-rules" />;
}
