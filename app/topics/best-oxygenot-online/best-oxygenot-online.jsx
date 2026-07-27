import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oxygenot-online');
}

export default function BestOxygenotOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-oxygenot-online" />;
}
