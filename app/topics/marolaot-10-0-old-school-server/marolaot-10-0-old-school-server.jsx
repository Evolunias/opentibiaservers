import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-10-0-old-school-server');
}

export default function Marolaot100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-10-0-old-school-server" />;
}
