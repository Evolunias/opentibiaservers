import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-online');
}

export default function ClassickDrakoriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-online" />;
}
