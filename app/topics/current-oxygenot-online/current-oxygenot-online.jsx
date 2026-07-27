import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oxygenot-online');
}

export default function CurrentOxygenotOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-oxygenot-online" />;
}
