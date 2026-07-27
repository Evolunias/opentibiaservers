import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-marolaot-ot');
}

export default function NoResetMarolaotOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-marolaot-ot" />;
}
