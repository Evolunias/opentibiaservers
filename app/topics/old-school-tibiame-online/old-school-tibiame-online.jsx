import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiame-online');
}

export default function OldSchoolTibiameOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiame-online" />;
}
