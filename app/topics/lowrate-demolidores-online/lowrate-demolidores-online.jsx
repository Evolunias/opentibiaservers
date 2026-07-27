import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-demolidores-online');
}

export default function LowrateDemolidoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-demolidores-online" />;
}
