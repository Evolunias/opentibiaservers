import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-marolaot-open-tibia');
}

export default function PopularMarolaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-marolaot-open-tibia" />;
}
