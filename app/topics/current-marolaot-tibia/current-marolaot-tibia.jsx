import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-marolaot-tibia');
}

export default function CurrentMarolaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-marolaot-tibia" />;
}
