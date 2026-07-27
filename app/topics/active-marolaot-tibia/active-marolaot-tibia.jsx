import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-marolaot-tibia');
}

export default function ActiveMarolaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-marolaot-tibia" />;
}
