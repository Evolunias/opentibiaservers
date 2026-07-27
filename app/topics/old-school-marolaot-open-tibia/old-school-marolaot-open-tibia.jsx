import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-marolaot-open-tibia');
}

export default function OldSchoolMarolaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-marolaot-open-tibia" />;
}
