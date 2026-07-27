import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dura-online-online');
}

export default function OldSchoolDuraOnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-dura-online-online" />;
}
