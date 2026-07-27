import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-old-school-server-canada');
}

export default function MarolaotOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-old-school-server-canada" />;
}
