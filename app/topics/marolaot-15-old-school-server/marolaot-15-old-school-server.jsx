import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-15-old-school-server');
}

export default function Marolaot15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-15-old-school-server" />;
}
