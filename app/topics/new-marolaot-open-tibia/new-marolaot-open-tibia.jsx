import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-marolaot-open-tibia');
}

export default function NewMarolaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-marolaot-open-tibia" />;
}
