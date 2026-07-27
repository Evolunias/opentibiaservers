import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-infernal-ot-tibia');
}

export default function OldSchoolInfernalOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-infernal-ot-tibia" />;
}
