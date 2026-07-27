import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-old-school-server-poland');
}

export default function AmeriaOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ameria-old-school-server-poland" />;
}
