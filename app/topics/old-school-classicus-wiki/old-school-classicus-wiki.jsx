import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classicus-wiki');
}

export default function OldSchoolClassicusWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-classicus-wiki" />;
}
