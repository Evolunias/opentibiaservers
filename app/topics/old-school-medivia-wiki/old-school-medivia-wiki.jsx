import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-medivia-wiki');
}

export default function OldSchoolMediviaWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-medivia-wiki" />;
}
