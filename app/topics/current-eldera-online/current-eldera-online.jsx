import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eldera-online');
}

export default function CurrentElderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-eldera-online" />;
}
