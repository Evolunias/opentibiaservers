import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rubinot-online');
}

export default function CurrentRubinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-rubinot-online" />;
}
