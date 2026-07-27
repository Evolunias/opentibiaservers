import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-12-old-school-server');
}

export default function Marolaot12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-12-old-school-server" />;
}
