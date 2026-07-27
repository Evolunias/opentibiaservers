import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-alastera-wiki');
}

export default function OldSchoolAlasteraWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-alastera-wiki" />;
}
