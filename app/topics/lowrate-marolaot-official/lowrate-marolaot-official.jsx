import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-marolaot-official');
}

export default function LowrateMarolaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-marolaot-official" />;
}
