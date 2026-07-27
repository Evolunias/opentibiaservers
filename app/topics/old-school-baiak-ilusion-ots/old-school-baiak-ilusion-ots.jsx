import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-baiak-ilusion-ots');
}

export default function OldSchoolBaiakIlusionOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-baiak-ilusion-ots" />;
}
