import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-marolaot-ot');
}

export default function BestMarolaotOtKeywordPage() {
  return <StaticKeywordPage slug="best-marolaot-ot" />;
}
