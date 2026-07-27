import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-old-school-server-uk');
}

export default function MarolaotOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="marolaot-old-school-server-uk" />;
}
