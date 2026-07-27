import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ranger-s-arcani-wiki');
}

export default function OldSchoolRangerSArcaniWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-ranger-s-arcani-wiki" />;
}
