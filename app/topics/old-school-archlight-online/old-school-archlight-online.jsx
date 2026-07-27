import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-archlight-online');
}

export default function OldSchoolArchlightOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-archlight-online" />;
}
