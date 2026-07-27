import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-old-school-server-usa');
}

export default function MarolaotOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-old-school-server-usa" />;
}
