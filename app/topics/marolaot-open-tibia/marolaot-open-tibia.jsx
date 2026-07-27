import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-open-tibia');
}

export default function MarolaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-open-tibia" />;
}
