import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-carlinot-wiki');
}

export default function OldSchoolCarlinotWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-carlinot-wiki" />;
}
