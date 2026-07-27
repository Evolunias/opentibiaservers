import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-rules');
}

export default function GunzodusRulesKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-rules" />;
}
