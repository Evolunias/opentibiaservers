import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-miracle-online');
}

export default function CurrentMiracleOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-miracle-online" />;
}
