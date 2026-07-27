import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-marolaot-ots');
}

export default function PopularMarolaotOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-marolaot-ots" />;
}
