import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-10-0-old-school-server');
}

export default function Ameria100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-10-0-old-school-server" />;
}
