import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dura-online');
}

export default function CurrentDuraOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-dura-online" />;
}
