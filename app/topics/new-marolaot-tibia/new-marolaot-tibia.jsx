import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-marolaot-tibia');
}

export default function NewMarolaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-marolaot-tibia" />;
}
