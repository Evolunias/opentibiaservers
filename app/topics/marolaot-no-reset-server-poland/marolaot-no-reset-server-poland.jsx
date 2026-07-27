import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-no-reset-server-poland');
}

export default function MarolaotNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="marolaot-no-reset-server-poland" />;
}
