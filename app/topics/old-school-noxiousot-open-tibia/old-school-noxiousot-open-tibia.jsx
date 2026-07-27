import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-noxiousot-open-tibia');
}

export default function OldSchoolNoxiousotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-noxiousot-open-tibia" />;
}
