import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-11-old-school-server');
}

export default function Ameria11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-11-old-school-server" />;
}
