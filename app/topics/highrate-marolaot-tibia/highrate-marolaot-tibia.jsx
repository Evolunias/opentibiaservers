import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-marolaot-tibia');
}

export default function HighrateMarolaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-marolaot-tibia" />;
}
