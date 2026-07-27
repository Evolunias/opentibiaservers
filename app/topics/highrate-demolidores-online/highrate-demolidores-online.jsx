import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-demolidores-online');
}

export default function HighrateDemolidoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-demolidores-online" />;
}
