import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-old-school-server-france');
}

export default function AmeriaOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ameria-old-school-server-france" />;
}
