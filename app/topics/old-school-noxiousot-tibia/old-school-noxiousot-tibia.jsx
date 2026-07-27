import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-noxiousot-tibia');
}

export default function OldSchoolNoxiousotTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-noxiousot-tibia" />;
}
