import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-4-old-school-server');
}

export default function Ameria84OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-4-old-school-server" />;
}
