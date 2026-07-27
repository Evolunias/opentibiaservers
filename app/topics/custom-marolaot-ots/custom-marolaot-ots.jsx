import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-marolaot-ots');
}

export default function CustomMarolaotOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-marolaot-ots" />;
}
