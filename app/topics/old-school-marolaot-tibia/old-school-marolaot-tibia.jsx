import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-marolaot-tibia');
}

export default function OldSchoolMarolaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-marolaot-tibia" />;
}
