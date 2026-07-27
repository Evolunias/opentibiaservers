import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nto-star-online');
}

export default function OldSchoolNtoStarOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-nto-star-online" />;
}
