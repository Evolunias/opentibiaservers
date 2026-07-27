import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-yurots-online');
}

export default function CurrentYurotsOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-yurots-online" />;
}
