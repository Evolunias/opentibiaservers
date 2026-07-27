import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realera-online');
}

export default function OldSchoolRealeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-realera-online" />;
}
