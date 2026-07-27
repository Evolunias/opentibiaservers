import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-marolaot-ot');
}

export default function PopularMarolaotOtKeywordPage() {
  return <StaticKeywordPage slug="popular-marolaot-ot" />;
}
