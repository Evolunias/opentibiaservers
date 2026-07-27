import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-wiki-europe');
}

export default function OldSchoolWikiEuropeKeywordPage() {
  return <StaticKeywordPage slug="old-school-wiki-europe" />;
}
