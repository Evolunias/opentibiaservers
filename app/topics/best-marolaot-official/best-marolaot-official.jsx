import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-marolaot-official');
}

export default function BestMarolaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-marolaot-official" />;
}
