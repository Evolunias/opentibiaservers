import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eldera-online');
}

export default function OldSchoolElderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-eldera-online" />;
}
