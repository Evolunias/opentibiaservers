import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classick-drakoria-online');
}

export default function BestClassickDrakoriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-classick-drakoria-online" />;
}
