import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-saintsot-online');
}

export default function OldSchoolSaintsotOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-saintsot-online" />;
}
