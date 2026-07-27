import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-gunzodus-wiki');
}

export default function OfficialGunzodusWikiKeywordPage() {
  return <StaticKeywordPage slug="official-gunzodus-wiki" />;
}
