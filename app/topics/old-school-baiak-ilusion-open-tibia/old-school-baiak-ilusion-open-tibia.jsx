import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-baiak-ilusion-open-tibia');
}

export default function OldSchoolBaiakIlusionOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-baiak-ilusion-open-tibia" />;
}
