import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-marolaot-official');
}

export default function CurrentMarolaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-marolaot-official" />;
}
