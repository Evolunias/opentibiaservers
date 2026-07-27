import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-old-school-server-latin-america');
}

export default function AmeriaOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-old-school-server-latin-america" />;
}
