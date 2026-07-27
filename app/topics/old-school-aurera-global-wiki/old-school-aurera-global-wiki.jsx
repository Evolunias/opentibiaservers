import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-aurera-global-wiki');
}

export default function OldSchoolAureraGlobalWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-aurera-global-wiki" />;
}
