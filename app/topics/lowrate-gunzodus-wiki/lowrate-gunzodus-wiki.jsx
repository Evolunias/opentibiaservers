import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-gunzodus-wiki');
}

export default function LowrateGunzodusWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-gunzodus-wiki" />;
}
