import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dura-online-online');
}

export default function CurrentDuraOnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-dura-online-online" />;
}
