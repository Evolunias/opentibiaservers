import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-baiak-ilusion');
}

export default function OldSchoolBaiakIlusionKeywordPage() {
  return <StaticKeywordPage slug="old-school-baiak-ilusion" />;
}
