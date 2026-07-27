import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-baiak-ilusion-ot');
}

export default function OldSchoolBaiakIlusionOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-baiak-ilusion-ot" />;
}
