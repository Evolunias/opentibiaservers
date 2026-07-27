import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-marolaot');
}

export default function LowrateMarolaotKeywordPage() {
  return <StaticKeywordPage slug="lowrate-marolaot" />;
}
