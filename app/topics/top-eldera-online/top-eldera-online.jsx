import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eldera-online');
}

export default function TopElderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-eldera-online" />;
}
