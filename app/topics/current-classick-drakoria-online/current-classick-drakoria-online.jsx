import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classick-drakoria-online');
}

export default function CurrentClassickDrakoriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-classick-drakoria-online" />;
}
