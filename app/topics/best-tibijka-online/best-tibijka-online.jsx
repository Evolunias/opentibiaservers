import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibijka-online');
}

export default function BestTibijkaOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-tibijka-online" />;
}
