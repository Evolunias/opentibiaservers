import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-blazera-online');
}

export default function OldSchoolBlazeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-blazera-online" />;
}
