import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-calmera-ot-online');
}

export default function OldSchoolCalmeraOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-calmera-ot-online" />;
}
