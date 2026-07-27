import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rubinot-online');
}

export default function LowrateRubinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rubinot-online" />;
}
