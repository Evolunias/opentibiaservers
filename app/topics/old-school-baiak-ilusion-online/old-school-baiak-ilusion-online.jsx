import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-baiak-ilusion-online');
}

export default function OldSchoolBaiakIlusionOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-baiak-ilusion-online" />;
}
