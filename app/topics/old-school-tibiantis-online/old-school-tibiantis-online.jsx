import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiantis-online');
}

export default function OldSchoolTibiantisOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiantis-online" />;
}
