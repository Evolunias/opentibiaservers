import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-old-school-server-poland');
}

export default function MarolaotOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="marolaot-old-school-server-poland" />;
}
