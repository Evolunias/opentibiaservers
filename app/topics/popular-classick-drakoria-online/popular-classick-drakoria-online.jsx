import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classick-drakoria-online');
}

export default function PopularClassickDrakoriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-classick-drakoria-online" />;
}
