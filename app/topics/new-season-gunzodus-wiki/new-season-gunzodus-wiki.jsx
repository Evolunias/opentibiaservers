import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-gunzodus-wiki');
}

export default function NewSeasonGunzodusWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-gunzodus-wiki" />;
}
