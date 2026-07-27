import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nostalther-online');
}

export default function OldSchoolNostaltherOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-nostalther-online" />;
}
