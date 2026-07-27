import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-old-school-server-argentina');
}

export default function MarolaotOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-old-school-server-argentina" />;
}
