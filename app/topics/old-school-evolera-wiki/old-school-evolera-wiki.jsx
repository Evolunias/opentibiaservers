import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolera-wiki');
}

export default function OldSchoolEvoleraWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolera-wiki" />;
}
