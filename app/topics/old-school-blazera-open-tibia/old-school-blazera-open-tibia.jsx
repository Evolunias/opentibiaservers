import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-blazera-open-tibia');
}

export default function OldSchoolBlazeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-blazera-open-tibia" />;
}
