import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-marolaot-tibia');
}

export default function FreshStartMarolaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-marolaot-tibia" />;
}
