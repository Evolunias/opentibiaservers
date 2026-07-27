import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-otmadness-online');
}

export default function OldSchoolOtmadnessOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-otmadness-online" />;
}
