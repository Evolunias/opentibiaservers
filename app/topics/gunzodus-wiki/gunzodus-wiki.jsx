import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-wiki');
}

export default function GunzodusWikiKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-wiki" />;
}
