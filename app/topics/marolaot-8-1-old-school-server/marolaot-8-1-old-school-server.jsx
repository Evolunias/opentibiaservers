import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-1-old-school-server');
}

export default function Marolaot81OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-1-old-school-server" />;
}
