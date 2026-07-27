import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-ot');
}

export default function AmeriaOtKeywordPage() {
  return <StaticKeywordPage slug="ameria-ot" />;
}
