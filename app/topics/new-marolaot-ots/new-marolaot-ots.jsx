import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-marolaot-ots');
}

export default function NewMarolaotOtsKeywordPage() {
  return <StaticKeywordPage slug="new-marolaot-ots" />;
}
