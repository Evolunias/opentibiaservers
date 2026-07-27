import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-11-old-school-server');
}

export default function Marolaot11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-11-old-school-server" />;
}
