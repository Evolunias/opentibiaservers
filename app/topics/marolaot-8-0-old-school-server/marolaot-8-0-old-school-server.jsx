import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-0-old-school-server');
}

export default function Marolaot80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-0-old-school-server" />;
}
