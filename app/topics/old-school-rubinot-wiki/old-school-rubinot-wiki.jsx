import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rubinot-wiki');
}

export default function OldSchoolRubinotWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-rubinot-wiki" />;
}
