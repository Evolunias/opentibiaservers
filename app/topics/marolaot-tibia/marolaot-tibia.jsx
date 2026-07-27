import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-tibia');
}

export default function MarolaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-tibia" />;
}
