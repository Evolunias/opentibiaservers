import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-4-old-school-server');
}

export default function Ameria74OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-4-old-school-server" />;
}
