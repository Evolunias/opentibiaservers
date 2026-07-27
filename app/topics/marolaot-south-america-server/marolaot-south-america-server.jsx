import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-south-america-server');
}

export default function MarolaotSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-south-america-server" />;
}
