import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-old-school-server-brazil');
}

export default function MarolaotOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="marolaot-old-school-server-brazil" />;
}
