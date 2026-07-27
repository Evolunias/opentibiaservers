import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-gunzodus-wiki');
}

export default function TopGunzodusWikiKeywordPage() {
  return <StaticKeywordPage slug="top-gunzodus-wiki" />;
}
