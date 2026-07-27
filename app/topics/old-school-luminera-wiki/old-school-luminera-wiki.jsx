import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-luminera-wiki');
}

export default function OldSchoolLumineraWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-luminera-wiki" />;
}
