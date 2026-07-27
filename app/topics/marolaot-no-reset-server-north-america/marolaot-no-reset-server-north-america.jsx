import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-no-reset-server-north-america');
}

export default function MarolaotNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-no-reset-server-north-america" />;
}
