import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-marolaot-tibia');
}

export default function NoResetMarolaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-marolaot-tibia" />;
}
