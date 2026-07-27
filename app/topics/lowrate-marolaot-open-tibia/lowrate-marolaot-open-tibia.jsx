import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-marolaot-open-tibia');
}

export default function LowrateMarolaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-marolaot-open-tibia" />;
}
