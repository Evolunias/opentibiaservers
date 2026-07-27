import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-1-old-school-server');
}

export default function Ameria71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-1-old-school-server" />;
}
