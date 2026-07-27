import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-south-america-servers');
}

export default function MarolaotSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="marolaot-south-america-servers" />;
}
