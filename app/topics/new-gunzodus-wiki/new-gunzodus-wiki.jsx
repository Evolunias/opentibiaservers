import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-gunzodus-wiki');
}

export default function NewGunzodusWikiKeywordPage() {
  return <StaticKeywordPage slug="new-gunzodus-wiki" />;
}
