import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-carlinot-tibia');
}

export default function OldSchoolCarlinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-carlinot-tibia" />;
}
