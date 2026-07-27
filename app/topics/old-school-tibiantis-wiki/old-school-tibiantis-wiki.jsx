import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiantis-wiki');
}

export default function OldSchoolTibiantisWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiantis-wiki" />;
}
