import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-old-school-server-sweden');
}

export default function MarolaotOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="marolaot-old-school-server-sweden" />;
}
