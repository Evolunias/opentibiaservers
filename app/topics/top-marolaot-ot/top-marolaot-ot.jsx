import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-marolaot-ot');
}

export default function TopMarolaotOtKeywordPage() {
  return <StaticKeywordPage slug="top-marolaot-ot" />;
}
