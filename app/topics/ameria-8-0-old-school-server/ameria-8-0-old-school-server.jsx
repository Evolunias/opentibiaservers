import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-0-old-school-server');
}

export default function Ameria80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-0-old-school-server" />;
}
