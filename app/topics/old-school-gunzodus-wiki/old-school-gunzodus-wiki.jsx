import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-gunzodus-wiki');
}

export default function OldSchoolGunzodusWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-gunzodus-wiki" />;
}
