import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-marolaot-open-tibia');
}

export default function TopMarolaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-marolaot-open-tibia" />;
}
