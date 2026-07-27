import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dura-online-online');
}

export default function PopularDuraOnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-dura-online-online" />;
}
