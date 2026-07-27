import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nto-star-wiki');
}

export default function OldSchoolNtoStarWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-nto-star-wiki" />;
}
