import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-official');
}

export default function MarolaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="marolaot-official" />;
}
