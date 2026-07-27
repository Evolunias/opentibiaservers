import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-old-school-server-france');
}

export default function MarolaotOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="marolaot-old-school-server-france" />;
}
