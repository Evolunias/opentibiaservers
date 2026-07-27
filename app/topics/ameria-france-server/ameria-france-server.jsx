import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-france-server');
}

export default function AmeriaFranceServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-france-server" />;
}
