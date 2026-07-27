import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-usa-servers');
}

export default function MarolaotUsaServersKeywordPage() {
  return <StaticKeywordPage slug="marolaot-usa-servers" />;
}
