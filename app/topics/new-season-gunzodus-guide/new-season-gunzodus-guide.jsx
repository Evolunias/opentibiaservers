import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-gunzodus-guide');
}

export default function NewSeasonGunzodusGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-gunzodus-guide" />;
}
