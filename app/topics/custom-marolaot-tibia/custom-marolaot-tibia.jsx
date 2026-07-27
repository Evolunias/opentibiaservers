import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-marolaot-tibia');
}

export default function CustomMarolaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-marolaot-tibia" />;
}
