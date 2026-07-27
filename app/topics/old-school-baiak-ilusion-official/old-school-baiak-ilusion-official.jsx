import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-baiak-ilusion-official');
}

export default function OldSchoolBaiakIlusionOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-baiak-ilusion-official" />;
}
