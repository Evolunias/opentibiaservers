import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-brazil-server');
}

export default function TibijkaBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-brazil-server" />;
}
