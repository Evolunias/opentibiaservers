import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-72-old-school-server');
}

export default function Ameria772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-72-old-school-server" />;
}
