import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-infernal-ot-open-tibia');
}

export default function OldSchoolInfernalOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-infernal-ot-open-tibia" />;
}
