import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classick-drakoria-online');
}

export default function OldSchoolClassickDrakoriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-classick-drakoria-online" />;
}
