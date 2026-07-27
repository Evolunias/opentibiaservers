import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-marolaot-tibia');
}

export default function TopMarolaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-marolaot-tibia" />;
}
