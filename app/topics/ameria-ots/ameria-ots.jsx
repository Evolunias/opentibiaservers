import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-ots');
}

export default function AmeriaOtsKeywordPage() {
  return <StaticKeywordPage slug="ameria-ots" />;
}
