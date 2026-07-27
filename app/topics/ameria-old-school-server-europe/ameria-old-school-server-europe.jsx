import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-old-school-server-europe');
}

export default function AmeriaOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ameria-old-school-server-europe" />;
}
