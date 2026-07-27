import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-gunzodus-wiki');
}

export default function ActiveGunzodusWikiKeywordPage() {
  return <StaticKeywordPage slug="active-gunzodus-wiki" />;
}
