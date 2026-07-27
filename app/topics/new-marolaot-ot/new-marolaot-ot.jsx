import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-marolaot-ot');
}

export default function NewMarolaotOtKeywordPage() {
  return <StaticKeywordPage slug="new-marolaot-ot" />;
}
