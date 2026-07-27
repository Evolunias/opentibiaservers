import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-old-school-server-latin-america');
}

export default function MarolaotOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-old-school-server-latin-america" />;
}
