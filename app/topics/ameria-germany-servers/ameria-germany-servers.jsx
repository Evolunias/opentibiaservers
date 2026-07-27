import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-germany-servers');
}

export default function AmeriaGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-germany-servers" />;
}
