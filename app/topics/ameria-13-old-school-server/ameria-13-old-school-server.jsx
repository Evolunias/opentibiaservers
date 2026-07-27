import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-13-old-school-server');
}

export default function Ameria13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-13-old-school-server" />;
}
