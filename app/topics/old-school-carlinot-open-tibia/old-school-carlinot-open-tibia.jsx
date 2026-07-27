import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-carlinot-open-tibia');
}

export default function OldSchoolCarlinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-carlinot-open-tibia" />;
}
