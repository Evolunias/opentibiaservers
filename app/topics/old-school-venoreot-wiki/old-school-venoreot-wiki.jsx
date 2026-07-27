import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-venoreot-wiki');
}

export default function OldSchoolVenoreotWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-venoreot-wiki" />;
}
