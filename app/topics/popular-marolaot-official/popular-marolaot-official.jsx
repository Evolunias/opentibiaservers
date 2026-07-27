import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-marolaot-official');
}

export default function PopularMarolaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-marolaot-official" />;
}
