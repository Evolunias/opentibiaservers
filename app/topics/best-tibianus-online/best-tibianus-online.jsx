import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibianus-online');
}

export default function BestTibianusOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-tibianus-online" />;
}
