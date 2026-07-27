import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-old-school-server-brazil');
}

export default function AmeriaOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="ameria-old-school-server-brazil" />;
}
