import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-old-school-server-mexico');
}

export default function MarolaotOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="marolaot-old-school-server-mexico" />;
}
