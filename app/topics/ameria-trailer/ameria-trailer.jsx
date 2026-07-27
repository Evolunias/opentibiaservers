import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-trailer');
}

export default function AmeriaTrailerKeywordPage() {
  return <StaticKeywordPage slug="ameria-trailer" />;
}
