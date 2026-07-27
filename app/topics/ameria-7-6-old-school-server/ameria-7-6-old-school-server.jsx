import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-6-old-school-server');
}

export default function Ameria76OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-6-old-school-server" />;
}
