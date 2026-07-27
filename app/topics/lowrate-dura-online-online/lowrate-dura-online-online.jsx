import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dura-online-online');
}

export default function LowrateDuraOnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dura-online-online" />;
}
