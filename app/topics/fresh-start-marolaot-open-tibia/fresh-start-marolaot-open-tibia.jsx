import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-marolaot-open-tibia');
}

export default function FreshStartMarolaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-marolaot-open-tibia" />;
}
