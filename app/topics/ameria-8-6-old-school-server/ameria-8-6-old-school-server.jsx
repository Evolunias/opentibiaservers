import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-6-old-school-server');
}

export default function Ameria86OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-6-old-school-server" />;
}
