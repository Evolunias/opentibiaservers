import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-gunzodus-wiki');
}

export default function FreshStartGunzodusWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-gunzodus-wiki" />;
}
