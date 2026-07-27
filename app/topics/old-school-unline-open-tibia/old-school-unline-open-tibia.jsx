import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-unline-open-tibia');
}

export default function OldSchoolUnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-unline-open-tibia" />;
}
