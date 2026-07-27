import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-9-6-old-school-server');
}

export default function Marolaot96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-9-6-old-school-server" />;
}
