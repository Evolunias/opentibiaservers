import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-otmadness-tibia');
}

export default function OldSchoolOtmadnessTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-otmadness-tibia" />;
}
