import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-canada-server');
}

export default function MarolaotCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-canada-server" />;
}
