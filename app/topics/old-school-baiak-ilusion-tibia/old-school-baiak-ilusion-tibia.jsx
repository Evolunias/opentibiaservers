import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-baiak-ilusion-tibia');
}

export default function OldSchoolBaiakIlusionTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-baiak-ilusion-tibia" />;
}
