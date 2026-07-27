import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-7-4-old-school-server');
}

export default function Marolaot74OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-7-4-old-school-server" />;
}
