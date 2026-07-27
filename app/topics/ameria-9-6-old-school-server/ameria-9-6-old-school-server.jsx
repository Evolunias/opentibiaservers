import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-9-6-old-school-server');
}

export default function Ameria96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-9-6-old-school-server" />;
}
