import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-gunzodus-wiki');
}

export default function CurrentGunzodusWikiKeywordPage() {
  return <StaticKeywordPage slug="current-gunzodus-wiki" />;
}
