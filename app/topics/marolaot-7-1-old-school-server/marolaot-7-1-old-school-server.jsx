import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-7-1-old-school-server');
}

export default function Marolaot71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-7-1-old-school-server" />;
}
