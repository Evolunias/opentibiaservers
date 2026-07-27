import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-marolaot-tibia');
}

export default function BestMarolaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-marolaot-tibia" />;
}
