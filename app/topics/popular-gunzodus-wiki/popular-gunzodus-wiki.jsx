import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-gunzodus-wiki');
}

export default function PopularGunzodusWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-gunzodus-wiki" />;
}
