import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-gunzodus-rules');
}

export default function NewSeasonGunzodusRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-gunzodus-rules" />;
}
