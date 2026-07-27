import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiascape-online');
}

export default function BestTibiascapeOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-tibiascape-online" />;
}
