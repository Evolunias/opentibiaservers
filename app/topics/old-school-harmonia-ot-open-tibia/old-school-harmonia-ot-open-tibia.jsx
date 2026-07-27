import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-harmonia-ot-open-tibia');
}

export default function OldSchoolHarmoniaOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-harmonia-ot-open-tibia" />;
}
