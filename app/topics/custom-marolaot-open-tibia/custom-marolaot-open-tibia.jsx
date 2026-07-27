import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-marolaot-open-tibia');
}

export default function CustomMarolaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-marolaot-open-tibia" />;
}
