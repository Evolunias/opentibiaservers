import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classick-drakoria-online');
}

export default function FreshStartClassickDrakoriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classick-drakoria-online" />;
}
