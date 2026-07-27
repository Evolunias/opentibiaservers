import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-france-servers');
}

export default function AmeriaFranceServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-france-servers" />;
}
