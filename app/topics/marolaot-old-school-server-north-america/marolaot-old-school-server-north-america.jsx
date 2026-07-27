import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-old-school-server-north-america');
}

export default function MarolaotOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-old-school-server-north-america" />;
}
