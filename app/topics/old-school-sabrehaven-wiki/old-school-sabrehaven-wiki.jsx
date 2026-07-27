import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-sabrehaven-wiki');
}

export default function OldSchoolSabrehavenWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-sabrehaven-wiki" />;
}
