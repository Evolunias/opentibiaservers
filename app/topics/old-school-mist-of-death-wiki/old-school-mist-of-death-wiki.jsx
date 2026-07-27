import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-mist-of-death-wiki');
}

export default function OldSchoolMistOfDeathWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-mist-of-death-wiki" />;
}
