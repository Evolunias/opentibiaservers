import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-marolaot-open-tibia');
}

export default function OfficialMarolaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-marolaot-open-tibia" />;
}
