import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-kasteria-online');
}

export default function OldSchoolKasteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-kasteria-online" />;
}
