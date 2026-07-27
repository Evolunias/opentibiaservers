import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-brazil-servers');
}

export default function TibijkaBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-brazil-servers" />;
}
