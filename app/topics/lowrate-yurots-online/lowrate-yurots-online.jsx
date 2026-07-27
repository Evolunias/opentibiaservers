import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-yurots-online');
}

export default function LowrateYurotsOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-yurots-online" />;
}
