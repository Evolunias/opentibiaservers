import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dura-online');
}

export default function LowrateDuraOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dura-online" />;
}
