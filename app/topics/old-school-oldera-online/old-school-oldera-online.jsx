import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oldera-online');
}

export default function OldSchoolOlderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-oldera-online" />;
}
