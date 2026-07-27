import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolera-open-tibia');
}

export default function OldSchoolEvoleraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolera-open-tibia" />;
}
