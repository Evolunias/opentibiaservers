import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dura-online');
}

export default function HighrateDuraOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-dura-online" />;
}
