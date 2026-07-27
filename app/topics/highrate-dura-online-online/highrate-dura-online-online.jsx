import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dura-online-online');
}

export default function HighrateDuraOnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-dura-online-online" />;
}
