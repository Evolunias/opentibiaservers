import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-usa-servers');
}

export default function AmeriaUsaServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-usa-servers" />;
}
