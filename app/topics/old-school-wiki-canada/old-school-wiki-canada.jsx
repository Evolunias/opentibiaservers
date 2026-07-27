import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-wiki-canada');
}

export default function OldSchoolWikiCanadaKeywordPage() {
  return <StaticKeywordPage slug="old-school-wiki-canada" />;
}
