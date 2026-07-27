import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-14-old-school-server');
}

export default function Ameria14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-14-old-school-server" />;
}
