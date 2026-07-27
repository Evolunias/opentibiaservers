import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-yurots-online');
}

export default function BestYurotsOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-yurots-online" />;
}
