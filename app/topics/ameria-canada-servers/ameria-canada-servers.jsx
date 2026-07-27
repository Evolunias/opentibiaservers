import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-canada-servers');
}

export default function AmeriaCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-canada-servers" />;
}
