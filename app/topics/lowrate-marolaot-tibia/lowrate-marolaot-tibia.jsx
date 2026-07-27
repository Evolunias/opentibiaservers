import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-marolaot-tibia');
}

export default function LowrateMarolaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-marolaot-tibia" />;
}
