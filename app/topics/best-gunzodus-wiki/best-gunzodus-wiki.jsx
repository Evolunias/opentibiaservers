import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-gunzodus-wiki');
}

export default function BestGunzodusWikiKeywordPage() {
  return <StaticKeywordPage slug="best-gunzodus-wiki" />;
}
