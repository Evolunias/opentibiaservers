import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-usa-server');
}

export default function MarolaotUsaServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-usa-server" />;
}
