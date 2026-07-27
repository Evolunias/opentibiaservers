import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-no-reset-server-europe');
}

export default function MarolaotNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="marolaot-no-reset-server-europe" />;
}
