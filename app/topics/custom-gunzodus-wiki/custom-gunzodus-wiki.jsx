import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-gunzodus-wiki');
}

export default function CustomGunzodusWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-gunzodus-wiki" />;
}
