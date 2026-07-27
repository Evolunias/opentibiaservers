import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-harmonia-ot-tibia');
}

export default function OldSchoolHarmoniaOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-harmonia-ot-tibia" />;
}
