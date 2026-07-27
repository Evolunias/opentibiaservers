import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classick-drakoria-wiki');
}

export default function OldSchoolClassickDrakoriaWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-classick-drakoria-wiki" />;
}
