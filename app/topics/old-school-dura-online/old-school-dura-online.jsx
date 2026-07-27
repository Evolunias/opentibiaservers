import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dura-online');
}

export default function OldSchoolDuraOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-dura-online" />;
}
