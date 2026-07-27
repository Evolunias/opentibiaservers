import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-ot');
}

export default function MarolaotOtKeywordPage() {
  return <StaticKeywordPage slug="marolaot-ot" />;
}
