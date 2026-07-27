import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-canada-servers');
}

export default function MarolaotCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="marolaot-canada-servers" />;
}
