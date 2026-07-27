import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-54-old-school-server');
}

export default function Ameria854OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-54-old-school-server" />;
}
