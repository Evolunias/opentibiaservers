import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-12-old-school-server');
}

export default function Ameria12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-12-old-school-server" />;
}
