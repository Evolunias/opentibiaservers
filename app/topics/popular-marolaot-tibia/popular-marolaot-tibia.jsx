import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-marolaot-tibia');
}

export default function PopularMarolaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-marolaot-tibia" />;
}
