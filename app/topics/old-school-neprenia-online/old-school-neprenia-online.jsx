import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-neprenia-online');
}

export default function OldSchoolNepreniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-neprenia-online" />;
}
