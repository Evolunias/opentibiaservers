import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ameria-wiki');
}

export default function OldSchoolAmeriaWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-ameria-wiki" />;
}
