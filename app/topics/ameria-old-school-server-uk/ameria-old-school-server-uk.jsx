import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-old-school-server-uk');
}

export default function AmeriaOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="ameria-old-school-server-uk" />;
}
