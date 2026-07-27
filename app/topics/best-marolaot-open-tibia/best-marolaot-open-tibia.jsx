import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-marolaot-open-tibia');
}

export default function BestMarolaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-marolaot-open-tibia" />;
}
