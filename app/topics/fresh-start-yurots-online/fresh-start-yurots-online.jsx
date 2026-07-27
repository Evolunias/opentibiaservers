import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-yurots-online');
}

export default function FreshStartYurotsOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-yurots-online" />;
}
