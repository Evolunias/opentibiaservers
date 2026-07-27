import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-old-school-server-sweden');
}

export default function AmeriaOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ameria-old-school-server-sweden" />;
}
