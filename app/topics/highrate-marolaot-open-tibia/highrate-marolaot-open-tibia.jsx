import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-marolaot-open-tibia');
}

export default function HighrateMarolaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-marolaot-open-tibia" />;
}
