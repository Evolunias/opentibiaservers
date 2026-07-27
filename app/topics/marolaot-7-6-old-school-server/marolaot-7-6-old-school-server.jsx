import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-7-6-old-school-server');
}

export default function Marolaot76OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-7-6-old-school-server" />;
}
