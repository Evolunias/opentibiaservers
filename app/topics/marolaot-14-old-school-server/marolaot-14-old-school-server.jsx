import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-14-old-school-server');
}

export default function Marolaot14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-14-old-school-server" />;
}
