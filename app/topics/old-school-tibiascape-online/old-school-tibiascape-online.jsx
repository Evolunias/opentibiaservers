import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiascape-online');
}

export default function OldSchoolTibiascapeOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiascape-online" />;
}
