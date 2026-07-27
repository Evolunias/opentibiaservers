import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-marolaot-ot');
}

export default function FreshStartMarolaotOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-marolaot-ot" />;
}
