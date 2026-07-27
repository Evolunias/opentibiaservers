import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-old-school-server-mexico');
}

export default function AmeriaOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="ameria-old-school-server-mexico" />;
}
