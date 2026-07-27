import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-marolaot-ot');
}

export default function ActiveMarolaotOtKeywordPage() {
  return <StaticKeywordPage slug="active-marolaot-ot" />;
}
