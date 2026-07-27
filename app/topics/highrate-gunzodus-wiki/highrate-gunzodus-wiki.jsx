import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-gunzodus-wiki');
}

export default function HighrateGunzodusWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-gunzodus-wiki" />;
}
