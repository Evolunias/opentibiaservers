import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-no-reset-server-france');
}

export default function MarolaotNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="marolaot-no-reset-server-france" />;
}
