import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classick-drakoria-open-tibia');
}

export default function OldSchoolClassickDrakoriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-classick-drakoria-open-tibia" />;
}
