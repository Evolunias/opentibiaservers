import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-originaltibia-online');
}

export default function OldSchoolOriginaltibiaOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-originaltibia-online" />;
}
