import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dura-online-online');
}

export default function TopDuraOnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-dura-online-online" />;
}
