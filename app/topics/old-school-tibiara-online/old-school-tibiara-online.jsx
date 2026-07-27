import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiara-online');
}

export default function OldSchoolTibiaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiara-online" />;
}
