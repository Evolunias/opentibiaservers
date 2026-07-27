import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-miracle-wiki');
}

export default function OldSchoolMiracleWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-miracle-wiki" />;
}
