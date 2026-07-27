import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-old-school-server-south-america');
}

export default function AmeriaOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-old-school-server-south-america" />;
}
