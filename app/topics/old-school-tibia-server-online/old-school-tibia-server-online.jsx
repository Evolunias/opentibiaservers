import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-server-online');
}

export default function OldSchoolTibiaServerOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-server-online" />;
}
