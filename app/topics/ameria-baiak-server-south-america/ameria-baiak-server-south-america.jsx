import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-baiak-server-south-america');
}

export default function AmeriaBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-baiak-server-south-america" />;
}
