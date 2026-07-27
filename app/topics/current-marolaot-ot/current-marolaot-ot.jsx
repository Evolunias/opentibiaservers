import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-marolaot-ot');
}

export default function CurrentMarolaotOtKeywordPage() {
  return <StaticKeywordPage slug="current-marolaot-ot" />;
}
