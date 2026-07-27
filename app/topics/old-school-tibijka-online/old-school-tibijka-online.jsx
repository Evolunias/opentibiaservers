import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibijka-online');
}

export default function OldSchoolTibijkaOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibijka-online" />;
}
