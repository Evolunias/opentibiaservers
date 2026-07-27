import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thaisot-wiki');
}

export default function OldSchoolThaisotWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-thaisot-wiki" />;
}
