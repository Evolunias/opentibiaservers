import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-gunzodus-wiki');
}

export default function NoResetGunzodusWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-gunzodus-wiki" />;
}
