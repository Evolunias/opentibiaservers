import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-yurots-online');
}

export default function TopYurotsOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-yurots-online" />;
}
