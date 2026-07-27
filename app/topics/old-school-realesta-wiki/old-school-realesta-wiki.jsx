import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realesta-wiki');
}

export default function OldSchoolRealestaWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-realesta-wiki" />;
}
