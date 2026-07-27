import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-old-school-server-canada');
}

export default function AmeriaOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="ameria-old-school-server-canada" />;
}
