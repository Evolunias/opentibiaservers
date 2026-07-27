import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-old-school-server-europe');
}

export default function MarolaotOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="marolaot-old-school-server-europe" />;
}
