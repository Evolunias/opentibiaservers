import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rubinot-online');
}

export default function BestRubinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-rubinot-online" />;
}
