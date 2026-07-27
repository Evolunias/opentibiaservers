import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-old-school-server-germany');
}

export default function AmeriaOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ameria-old-school-server-germany" />;
}
