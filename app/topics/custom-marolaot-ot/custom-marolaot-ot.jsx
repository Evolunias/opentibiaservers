import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-marolaot-ot');
}

export default function CustomMarolaotOtKeywordPage() {
  return <StaticKeywordPage slug="custom-marolaot-ot" />;
}
