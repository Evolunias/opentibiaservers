import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dura-online');
}

export default function TopDuraOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-dura-online" />;
}
