import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-baiak-server-france');
}

export default function AmeriaBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ameria-baiak-server-france" />;
}
