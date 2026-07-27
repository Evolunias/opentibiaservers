import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kyra-online');
}

export default function KyraOnlineKeywordPage() {
  return <StaticKeywordPage slug="kyra-online" />;
}
