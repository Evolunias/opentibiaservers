import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-old-school-server-north-america');
}

export default function AmeriaOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-old-school-server-north-america" />;
}
