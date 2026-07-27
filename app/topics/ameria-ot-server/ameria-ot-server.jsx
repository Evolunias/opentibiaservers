import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-ot-server');
}

export default function AmeriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-ot-server" />;
}
