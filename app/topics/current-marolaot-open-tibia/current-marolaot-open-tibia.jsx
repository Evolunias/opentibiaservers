import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-marolaot-open-tibia');
}

export default function CurrentMarolaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-marolaot-open-tibia" />;
}
