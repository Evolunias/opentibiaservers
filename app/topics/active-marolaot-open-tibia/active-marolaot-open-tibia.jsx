import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-marolaot-open-tibia');
}

export default function ActiveMarolaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-marolaot-open-tibia" />;
}
