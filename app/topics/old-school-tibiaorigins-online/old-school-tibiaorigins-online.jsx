import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaorigins-online');
}

export default function OldSchoolTibiaoriginsOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaorigins-online" />;
}
