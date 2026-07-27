import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibijka-wiki');
}

export default function OldSchoolTibijkaWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibijka-wiki" />;
}
