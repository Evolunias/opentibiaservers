import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-old-school-server-germany');
}

export default function MarolaotOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="marolaot-old-school-server-germany" />;
}
